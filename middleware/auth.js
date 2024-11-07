export default defineNuxtRouteMiddleware(async (to) => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  if (!user.value) {
    if (to.path != '/login') return navigateTo('/login')
  }
  else {
    if (to.path == '/login') return navigateTo('/admin')
  }
})