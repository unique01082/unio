import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      // insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: "index.ts",
      name: "@baolq/unio",
      formats: ["es", "umd"],
      fileName: "@baolq/unio",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
