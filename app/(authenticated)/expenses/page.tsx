import {
  AnimatedWrapper,
  ExpenseCard,
  ExpenseForm,
  Header,
} from "@/components";
import { ExpenseTable } from "@/components/Tables/ExpenseTable";
import { getExpenseData } from "@/services/expense";
import {
  BadgeIndianRupee,
  BellDot,
  BookKey,
  HardDriveDownload,
} from "lucide-react";

const Expenses = async () => {

  const {
    todayExpenses,
    thisMonthExpenses,
    expenseCount,
    todayExpenseCount,
    expenses
  } = await getExpenseData();

  return (
    <main>
      <Header
        title="Expense Entry"
        subtitle="Log center-related spending and expenses"
      />

      <div className="flex gap-5 mt-10">
        <div className="w-full max-w-[1120px] p-4 bg-white shadow-md rounded-lg space-y-8">
          <AnimatedWrapper>
            <ExpenseForm />
          </AnimatedWrapper>
        </div>

        <div className="hidden lg:flex shrink-0 flex-1 flex-col gap-5">
          <ExpenseCard
            label="Today's Expenses"
            value={todayExpenses}
            icon={BadgeIndianRupee}
            color="red"
            info={`${todayExpenseCount} expenses logged.`}
          />
          <ExpenseCard
            label="This Month's Expenses"
            value={thisMonthExpenses}
            icon={BadgeIndianRupee}
            color="orange"
            info={`${expenseCount} total expenses.`}
          />

          <div className="bg-white shadow-md rounded-lg p-5">
            <h1 className="text-xl font-bold text-gray-900">Quick Action</h1>
            <ul className="mt-8 space-y-6 w-full text-center">
              <li className="text-sm font-normal flex items-center gap-2 text-grayish">
                <HardDriveDownload className="text-accent" size={18} />
                Export Collection
              </li>
              <li className="text-sm font-normal flex items-center gap-2 text-grayish">
                <BellDot className="text-yellow-400" size={18} />
                Send Reminder
              </li>
              <li className="text-sm font-normal flex items-center gap-2 text-grayish">
                <BookKey className="text-green-500" size={18} />
                View Reports
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg mt-10">
        <ExpenseTable
          expenses={expenses.map((expense) => ({
            ...expense,
            date: new Date(expense.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          }))}
        />
      </div>
    </main>
  );
};

export default Expenses;
