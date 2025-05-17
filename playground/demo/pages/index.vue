<script setup>
import { ref } from 'vue'

const email = ref('')
const name = ref('')
const password = ref('')
const phone = ref('')
const showPassword = ref(false)
</script>

<template>
  <div style="max-width: 400px; margin: 50px auto; font-family: sans-serif;">
    <h1 style="font-size: 24px; margin-bottom: 20px;">ERTU Input Test</h1>

    <label style="margin-bottom: 6px; display: block;">Email</label>
    <BaseInput
      v-model="email"
      :rules="{ required: true, email: true }"
      :messages="{ required: 'Required', email: 'Invalid email' }"
      mask="***@***.***"
      input-class="styled-input"
      error-class="styled-error"
    />
    <p style="margin-top: 10px;">Email: {{ email }}</p>
    <hr class="divider" />

    <label style="margin-top: 20px; margin-bottom: 6px; display: block;">Name</label>
    <BaseInput
      v-model="name"
      :rules="{ required: true, minLength: 3 }"
      :messages="{ required: 'Name is required', minLength: 'Minimum 3 characters' }"
      input-class="styled-input"
      error-class="styled-error"
    />
    <p style="margin-top: 10px;">Name: {{ name }}</p>
    <hr class="divider" />

    <label style="margin-top: 20px; margin-bottom: 6px; display: block;">Password</label>
    <div style="position: relative;">
      <BaseInput
        v-model="password"
        :rules="{ required: true, minLength: 6 }"
        :messages="{ required: 'Password is required', minLength: 'Minimum 6 characters' }"
        :type="showPassword ? 'text' : 'password'"
        input-class="styled-input"
        error-class="styled-error"
      />
      <button
        type="button"
        @click="showPassword = !showPassword"
        style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 13px; color: #3f51b5;"
      >
        {{ showPassword ? 'Hide' : 'Show' }}
      </button>
    </div>
    <hr class="divider" />

    <label style="margin-top: 20px; margin-bottom: 6px; display: block;">Phone</label>
    <BaseInput
      v-model="phone"
      :rules="{ required: true }"
      :messages="{ required: 'Phone is required' }"
      mask="(###) ###-####"
      input-class="styled-input"
      error-class="styled-error"
    />
    <p style="margin-top: 10px;">Phone: {{ phone }}</p>
  </div>
</template>

<style>
.styled-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.3s ease;
  outline: none;
  background-color: #f9f9f9;
  color: #333;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
}

.styled-input::placeholder {
  color: #aaa;
  font-style: italic;
  opacity: 1;
}

.styled-input:focus {
  border-color: #3f51b5;
  background-color: #fff;
  box-shadow: 0 0 0 4px rgba(63, 81, 181, 0.2);
}

.styled-input.input-error {
  border-color: #e53935;
  background-color: #fff5f5;
  box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.25);
}

.styled-error {
  color: #e53935;
  font-size: 13px;
  margin-top: 6px;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.divider {
  border: none;
  border-top: 1px solid #ddd;
  margin: 30px 0;
}
</style>
