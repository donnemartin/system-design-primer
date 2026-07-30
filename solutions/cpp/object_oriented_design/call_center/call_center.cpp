#include <iostream>
#include <vector>
#include <deque>
#include <string>
#include <memory>

enum class Rank {
    OPERATOR,
    SUPERVISOR,
    DIRECTOR
};

std::string rankToString(Rank rank) {
    switch (rank) {
        case Rank::OPERATOR: return "Operator";
        case Rank::SUPERVISOR: return "Supervisor";
        case Rank::DIRECTOR: return "Director";
        default: return "Unknown";
    }
}

enum class CallState {
    READY,
    IN_PROGRESS,
    COMPLETE
};

class CallCenter;

class Call {
public:
    CallState state;
    Rank rank;
    class Employee* employee;

    Call(Rank r) : state(CallState::READY), rank(r), employee(nullptr) {}
};

class Employee {
protected:
    int employeeId;
    std::string name;
    Rank rank;
    Call* call;
    CallCenter* callCenter;

public:
    Employee(int id, const std::string& n, Rank r, CallCenter* cc)
        : employeeId(id), name(n), rank(r), call(nullptr), callCenter(cc) {}

    virtual ~Employee() = default;

    void takeCall(Call* c) {
        call = c;
        call->employee = this;
        call->state = CallState::IN_PROGRESS;
        std::cout << name << " taking call" << std::endl;
    }

    void completeCall() {
        call->state = CallState::COMPLETE;
        std::cout << name << " completed call" << std::endl;
        call = nullptr;
    }

    virtual void escalateCall() = 0;

    void _escalateCall();

    Call* getCall() const { return call; }
    Rank getRank() const { return rank; }
    std::string getName() const { return name; }
};

class Operator : public Employee {
public:
    Operator(int id, const std::string& name, CallCenter* cc)
        : Employee(id, name, Rank::OPERATOR, cc) {}

    void escalateCall() override {
        call->rank = Rank::SUPERVISOR;
        _escalateCall();
    }
};

class Supervisor : public Employee {
public:
    Supervisor(int id, const std::string& name, CallCenter* cc)
        : Employee(id, name, Rank::SUPERVISOR, cc) {}

    void escalateCall() override {
        call->rank = Rank::DIRECTOR;
        _escalateCall();
    }
};

class Director : public Employee {
public:
    Director(int id, const std::string& name, CallCenter* cc)
        : Employee(id, name, Rank::DIRECTOR, cc) {}

    void escalateCall() override {
        throw std::runtime_error("Directors must be able to handle any call");
    }
};

class CallCenter {
private:
    std::vector<Employee*> operators;
    std::vector<Employee*> supervisors;
    std::vector<Employee*> directors;
    std::deque<Call*> queuedCalls;

public:
    CallCenter() = default;

    ~CallCenter() {
        for (auto emp : operators) delete emp;
        for (auto emp : supervisors) delete emp;
        for (auto emp : directors) delete emp;
        for (auto call : queuedCalls) delete call;
    }

    void addOperator(Employee* emp) { operators.push_back(emp); }
    void addSupervisor(Employee* emp) { supervisors.push_back(emp); }
    void addDirector(Employee* emp) { directors.push_back(emp); }

    void dispatchCall(Call* call) {
        Employee* employee = nullptr;

        if (call->rank == Rank::OPERATOR) {
            employee = dispatchCall(call, operators);
        }
        if (call->rank == Rank::SUPERVISOR || !employee) {
            employee = dispatchCall(call, supervisors);
        }
        if (call->rank == Rank::DIRECTOR || !employee) {
            employee = dispatchCall(call, directors);
        }

        if (!employee) {
            queuedCalls.push_back(call);
            std::cout << "Call queued" << std::endl;
        }
    }

    Employee* dispatchCall(Call* call, std::vector<Employee*>& employees) {
        for (auto employee : employees) {
            if (!employee->getCall()) {
                employee->takeCall(call);
                return employee;
            }
        }
        return nullptr;
    }

    void notifyCallEscalated(Call* call) {
        dispatchCall(call);
    }

    void notifyCallCompleted(Call* call) {
    }
};

void Employee::_escalateCall() {
    call->state = CallState::READY;
    Call* c = call;
    call = nullptr;
    callCenter->notifyCallEscalated(c);
}

int main() {
    CallCenter center;

    Operator* op1 = new Operator(1, "Alice", &center);
    Operator* op2 = new Operator(2, "Bob", &center);
    Supervisor* sup1 = new Supervisor(3, "Charlie", &center);
    Director* dir1 = new Director(4, "Diana", &center);

    center.addOperator(op1);
    center.addOperator(op2);
    center.addSupervisor(sup1);
    center.addDirector(dir1);

    Call* call1 = new Call(Rank::OPERATOR);
    Call* call2 = new Call(Rank::OPERATOR);
    Call* call3 = new Call(Rank::SUPERVISOR);

    std::cout << "Dispatching calls:" << std::endl;
    center.dispatchCall(call1);
    center.dispatchCall(call2);
    center.dispatchCall(call3);

    std::cout << "\nCompleting calls:" << std::endl;
    op1->completeCall();
    op2->completeCall();

    return 0;
}
