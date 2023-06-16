export default defineNuxtRouteMiddleware((from, to) => {
  const user = useSupabaseUser();
  if (user.value) return;

  return navigateTo("/login");
});
