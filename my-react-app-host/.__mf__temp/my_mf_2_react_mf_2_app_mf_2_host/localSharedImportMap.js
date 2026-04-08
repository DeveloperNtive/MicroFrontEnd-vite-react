
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "react": async () => {
          let pkg = await import("__mf__virtual/my_mf_2_react_mf_2_app_mf_2_host__prebuild__react__prebuild__.js");
            return pkg;
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/my_mf_2_react_mf_2_app_mf_2_host__prebuild__react_mf_2_dom__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "react": {
            name: "react",
            version: "19.2.4",
            scope: ["default"],
            loaded: false,
            from: "my-react-app-host",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"react"}' must be provided by host`);
              }
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "react" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.4",
              
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.2.4",
            scope: ["default"],
            loaded: false,
            from: "my-react-app-host",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"react-dom"}' must be provided by host`);
              }
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "react-dom" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.4",
              
            }
          }
        
    }
      const usedRemotes = [
                {
                  entryGlobalName: "mf1",
                  name: "mf1",
                  type: "module",
                  entry: "http://localhost:5173/remoteEntry.js",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "mf2",
                  name: "mf2",
                  type: "module",
                  entry: "http://localhost:5174/remoteEntry.js",
                  shareScope: "default",
                }
          
      ]
      export {
        usedShared,
        usedRemotes
      }
      