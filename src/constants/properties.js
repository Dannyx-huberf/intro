import todoIcon from "../assets/images/icon-todo.svg";
import calendarIcon from "../assets/images/icon-calendar.svg";
import reminderIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";
export const navlinks = [
  {
    id: 1,
    title: "Features",
    sublinks: [
      { id: "a", title: "Todo List", icon: todoIcon },
      { id: "b", title: "Calendar", icon: calendarIcon },
      { id: "c", title: "Reminders", icon: reminderIcon },
      { id: "d", title: "Planning", icon: planningIcon },
    ],
  },
  {
    id: 2,
    title: "Company",
    sublinks: [
      { id: "a", title: "History" },
      { id: "b", title: "Our Team" },
      { id: "c", title: "Blog" },
    ],
  },
  { id: 3, title: "Careers" },
  { id: 4, title: "About" },
];
