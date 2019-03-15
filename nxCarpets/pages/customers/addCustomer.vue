<template>
  <div class="container">
    <h1 class="title">
      Contact
    </h1>
    <div class="content">
      <form name="contact" action="" method="post">
        <label class="form-label" for="name">
          Name:
        </label>
        <input class="form-field" name="name" id="name" />
        <label class="form-label" for="code">
          Code:
        </label>
        <input class="form-field" name="code" id="code" />
        <label class="form-label" for="message">
          Street:
        </label>
        <textarea class="form-field" name="street" id="street"></textarea>
        <input class="form-button" type="submit" value="Add Customer" />
      </form>
    </div>
  </div>
</template>