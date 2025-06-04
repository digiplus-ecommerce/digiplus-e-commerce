import { defineStore } from "pinia";

interface User {
  username: string;
  lastname: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    users: [] as User[],
    currentUser: null as User | null,
  }),
  actions: {
    register(user: User) {
      const existing = this.users.find((u) => u.username === user.username);
      if (existing) throw new Error("Username already exists");
      this.users.push(user);
      localStorage.setItem("users", JSON.stringify(this.users));
    },
    loadUsers() {
      const data = localStorage.getItem("users");
      if (data) this.users = JSON.parse(data);
    },
    login(username: string, password: string) {
      const user = this.users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        this.currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(user));
      } else {
        throw new Error("Invalid credentials");
      }
    },
    logout() {
      this.currentUser = null;
      localStorage.removeItem("currentUser");
    },
    loadCurrentUser() {
      const data = localStorage.getItem("currentUser");
      if (data) this.currentUser = JSON.parse(data);
    },
  },
});
