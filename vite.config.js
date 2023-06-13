import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    base: "/page-by-vite/",
  };
  if (command === "serve") {
    return {
      // dev 独有配置
    };
  } else {
    // command === 'build'
    return {
      // build 独有配置
    };
  }
});
