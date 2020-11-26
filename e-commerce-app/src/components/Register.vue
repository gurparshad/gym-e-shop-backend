<template>
<div>
    <form>
    <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>

    <div class="form-group">
    <label for="exampleInputEmail1">Last Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Confirm-Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>

  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div> 
</template>

<script>
 export default {
    name: 'Register' 
    }
</script>
<style scopped>
 
</style>