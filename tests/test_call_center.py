"""Unit tests for call_center.py"""
import unittest
from collections import deque
from solutions.object_oriented_design.call_center.call_center import (
    CallCenter, Operator, Supervisor, Director, Call, Rank, CallState
)


class TestCallCenter(unittest.TestCase):
    """Test cases for the Call Center system"""

    def setUp(self):
        """Initialize test fixtures"""
        self.call_center = CallCenter(
            operators=[],
            supervisors=[],
            directors=[]
        )
        self.operator = Operator(1, "Alice", self.call_center)
        self.supervisor = Supervisor(2, "Bob", self.call_center)
        self.director = Director(3, "Charlie", self.call_center)
        
        self.call_center.operators = [self.operator]
        self.call_center.supervisors = [self.supervisor]
        self.call_center.directors = [self.director]

    def test_operator_creation(self):
        """Test operator can be created"""
        self.assertEqual(self.operator.name, "Alice")
        self.assertEqual(self.operator.rank, Rank.OPERATOR)

    def test_supervisor_creation(self):
        """Test supervisor can be created"""
        self.assertEqual(self.supervisor.name, "Bob")
        self.assertEqual(self.supervisor.rank, Rank.SUPERVISOR)

    def test_director_creation(self):
        """Test director can be created"""
        self.assertEqual(self.director.name, "Charlie")
        self.assertEqual(self.director.rank, Rank.DIRECTOR)

    def test_dispatch_call_to_operator(self):
        """Test dispatching call to available operator"""
        call = Call(Rank.OPERATOR)
        self.call_center.dispatch_call(call)
        self.assertEqual(self.operator.call, call)
        self.assertEqual(call.state, CallState.IN_PROGRESS)

    def test_dispatch_call_queued_when_no_available(self):
        """Test call is queued when no employee available"""
        call1 = Call(Rank.OPERATOR)
        call2 = Call(Rank.OPERATOR)
        
        self.call_center.dispatch_call(call1)
        self.call_center.dispatch_call(call2)
        
        self.assertEqual(len(self.call_center.queued_calls), 1)
        self.assertEqual(self.call_center.queued_calls[0], call2)

    def test_complete_call(self):
        """Test completing a call"""
        call = Call(Rank.OPERATOR)
        self.operator.take_call(call)
        self.operator.complete_call()
        
        self.assertEqual(call.state, CallState.COMPLETE)

    def test_escalate_call_from_operator(self):
        """Test escalating call from operator to supervisor"""
        call = Call(Rank.OPERATOR)
        self.operator.take_call(call)
        self.operator.escalate_call()
        
        self.assertEqual(call.rank, Rank.SUPERVISOR)
        self.assertEqual(call.state, CallState.READY)
        self.assertIsNone(self.operator.call)


class TestCall(unittest.TestCase):
    """Test cases for Call object"""

    def test_call_creation(self):
        """Test call can be created with rank"""
        call = Call(Rank.OPERATOR)
        self.assertEqual(call.rank, Rank.OPERATOR)
        self.assertEqual(call.state, CallState.READY)
        self.assertIsNone(call.employee)


if __name__ == '__main__':
    unittest.main()
