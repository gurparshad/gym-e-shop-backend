<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>
          <router-link to="/">
        GymShop
          </router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
              <b-navbar-nav>
        <b-nav-item>
          <router-link to="/cart">
            Cart
            </router-link></b-nav-item>
      </b-navbar-nav>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item>
            <router-link to="/register">
            Register
            </router-link>
            </b-dropdown-item>
          <b-dropdown-item href="login">
            <router-link to="/login">
            Login
            </router-link>
        </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
a, a:hover, a:focus, a:active{
  text-decoration: none;
  color: inherit;
}
</style>
