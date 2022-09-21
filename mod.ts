let path = ""
if (Deno.build.os === "linux") {
  path = "./native/target/debug/liblynx_deno.so"
} else if (Deno.build.os === "windows") {
  path = "./native/target/debug/lynx_deno.dll"
} else if (Deno.build.os === "darwin") {
  path = "./native/target/debug/liblynx_deno.dylib"
}
const rid = Deno.openPlugin(path);
//@ts-Expect-Error
const { hello_world } = (Deno as any).core.ops();

/** Returns `Hello World` in bold */
export function getHelloWorld(): ArrayBuffer {
  return (Deno as any).core.dispatch(hello_world)
}
