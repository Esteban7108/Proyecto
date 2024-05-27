import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Dark_mode from "../Dark-mode";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export function Navigation2() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <Card className="h-screen w-64 p-4 shadow-xl shadow-blue-gray-900/5 dark:bg-gray-800 dark:text-white rounded-lg flex flex-col justify-between">
      {/* Header Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <Typography
            variant="h5"
            color="blue-gray"
            className="dark:text-white"
          >
            Navegación
          </Typography>
          <Dark_mode />
        </div>

        {/* Profile Section */}
        <div className="flex items-center justify-center mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <div className="h-10 w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-full h-full text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Links */}
        <List>
          <a href="/" className="block">
            <ListItem className="flex items-center gap-4 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
          </a>
          <a href="/overview" className="block">
            <ListItem className="flex items-center gap-4 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              Overview
            </ListItem>
          </a>
          <a href="/contact" className="block">
            <ListItem className="flex items-center gap-4 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Contact
            </ListItem>
          </a>
          <a href="/settings" className="block">
            <ListItem className="flex items-center gap-4 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
          </a>
        </List>
      </div>

      {/* Logout Section */}
      <button onClick={onLogout} className="w-full text-left">
        <ListItem className="flex items-center gap-4 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </button>
    </Card>
  );
}
