from abc import ABCMeta, abstractmethod
from collections import deque
from enum import Enum
from typing import Optional, List, Deque


class Rank(Enum):
    """Represents the rank/level of employees in the call center."""
    OPERATOR = 0
    SUPERVISOR = 1
    DIRECTOR = 2


class Employee(metaclass=ABCMeta):
    """Abstract base class for all employees."""

    def __init__(self, employee_id: int, name: str, rank: Rank, call_center: 'CallCenter') -> None:
        self.employee_id: int = employee_id
        self.name: str = name
        self.rank: Rank = rank
        self.call: Optional['Call'] = None
        self.call_center: 'CallCenter' = call_center

    def take_call(self, call: 'Call') -> None:
        """Assume the employee will always successfully take the call."""
        self.call = call
        self.call.employee = self
        self.call.state = CallState.IN_PROGRESS

    def complete_call(self) -> None:
        """Mark the current call as complete."""
        self.call.state = CallState.COMPLETE
        self.call_center.notify_call_completed(self.call)

    @abstractmethod
    def escalate_call(self) -> None:
        """Escalate the current call to the next level."""
        pass

    def _escalate_call(self) -> None:
        """Internal method to handle call escalation."""
        self.call.state = CallState.READY
        call = self.call
        self.call = None
        self.call_center.notify_call_escalated(call)


class Operator(Employee):
    """Operator employee - handles customer calls."""

    def __init__(self, employee_id: int, name: str, call_center: 'CallCenter') -> None:
        super(Operator, self).__init__(employee_id, name, Rank.OPERATOR, call_center)

    def escalate_call(self) -> None:
        """Escalate call to a supervisor."""
        self.call.rank = Rank.SUPERVISOR
        self._escalate_call()


class Supervisor(Employee):
    """Supervisor employee - handles escalated calls from operators."""

    def __init__(self, employee_id: int, name: str, call_center: 'CallCenter') -> None:
        super(Supervisor, self).__init__(employee_id, name, Rank.SUPERVISOR, call_center)

    def escalate_call(self) -> None:
        """Escalate call to a director."""
        self.call.rank = Rank.DIRECTOR
        self._escalate_call()


class Director(Employee):
    """Director employee - handles escalated calls from supervisors."""

    def __init__(self, employee_id: int, name: str, call_center: 'CallCenter') -> None:
        super(Director, self).__init__(employee_id, name, Rank.DIRECTOR, call_center)

    def escalate_call(self) -> None:
        """Directors must be able to handle any call."""
        raise NotImplementedError('Directors must be able to handle any call')


class CallState(Enum):
    """Represents the state of a call."""
    READY = 0
    IN_PROGRESS = 1
    COMPLETE = 2


class Call(object):
    """Represents a customer call."""

    def __init__(self, rank: Rank) -> None:
        self.state: CallState = CallState.READY
        self.rank: Rank = rank
        self.employee: Optional[Employee] = None


class CallCenter(object):
    """Main call center dispatcher."""

    def __init__(self, operators: List[Employee], supervisors: List[Employee], 
                 directors: List[Employee]) -> None:
        self.operators: List[Employee] = operators
        self.supervisors: List[Employee] = supervisors
        self.directors: List[Employee] = directors
        self.queued_calls: Deque['Call'] = deque()

    def dispatch_call(self, call: 'Call') -> None:
        """Dispatch a call to an available employee."""
        if call.rank not in (Rank.OPERATOR, Rank.SUPERVISOR, Rank.DIRECTOR):
            raise ValueError('Invalid call rank: {}'.format(call.rank))
        employee: Optional[Employee] = None
        if call.rank == Rank.OPERATOR:
            employee = self._dispatch_call(call, self.operators)
        if call.rank == Rank.SUPERVISOR or employee is None:
            employee = self._dispatch_call(call, self.supervisors)
        if call.rank == Rank.DIRECTOR or employee is None:
            employee = self._dispatch_call(call, self.directors)
        if employee is None:
            self.queued_calls.append(call)

    def _dispatch_call(self, call: 'Call', employees: List[Employee]) -> Optional[Employee]:
        """Find an available employee in the given list and assign the call."""
        for employee in employees:
            if employee.call is None:
                employee.take_call(call)
                return employee
        return None

    def notify_call_escalated(self, call: 'Call') -> None:
        """Notify when a call is escalated."""
        pass

    def notify_call_completed(self, call: 'Call') -> None:
        """Notify when a call is completed."""
        pass

    def dispatch_queued_call_to_newly_freed_employee(self, call: 'Call', 
                                                      employee: Employee) -> None:
        """Dispatch a queued call to a newly available employee."""
        pass
