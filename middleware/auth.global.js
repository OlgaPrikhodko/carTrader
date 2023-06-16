export default defineNuxtRouteMiddleware((from, to) => {
  if (to.path.includes("profile")) {
    const user = useSupabaseUser();
    if (user.value) return;

    return navigateTo("/login");
  }
});
