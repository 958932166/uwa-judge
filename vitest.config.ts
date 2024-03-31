
import path from "path";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, ".next", ".mariadb"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./")
    }
  }
  
});
