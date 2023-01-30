<script setup>
import { useRoute } from 'vue-router'
import { watchEffect, ref } from 'vue'

let check_route = ref('');

const { path } = useRoute()
    watchEffect(() => {
      check_route.value = path
    })

</script>
<template>
  <div class="flex justify-center py-2 place-items-center">
    <nav >
      <ol class="flex items-center justify-center w-full lg:p-3 p-2 lg:space-x-2 lg:text-sm text-xs lg:font-medium font-normal text-center text-purple-600 bg-slate-200 border-2 border-purple-600 rounded-lg shadow-sm dark:text-purple-600 sm:text-base dark:bg-slate-200 dark:border-purple-600 sm:p-4 sm:space-x-4">
          <li class="flex items-center" 
          :class="{'text-lime-600 dark:text-lime-600'
          : check_route == '/services'}">
              <span 
              class="flex items-center justify-center w-5 h-5 mr-2 lg:text-xs border rounded-full shrink-0" 
              :class="check_route == '/services' ? 'border-lime-600 dark:border-lime-600' : 'border-purple-600 dark:border-purple-400'">
                  1
              </span>
              Services <span class="hidden sm:inline-flex sm:ml-2">Select</span>
              <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
          </li>
          <li class="flex items-center"
          :class="{'text-lime-600 dark:text-lime-600'
          : check_route == '/selecttime'}">
              <span 
              class="flex items-center justify-center w-5 h-5 mr-2 text-xs border rounded-full shrink-0"
              :class="check_route == '/selecttime' ? 'border-lime-600 dark:border-lime-600' : 'border-purple-600 dark:border-purple-400'">
                  2
              </span>
              Time <span class="hidden sm:inline-flex sm:ml-2">Select</span>
              <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
          </li>
          <li class="flex items-center"
          :class="{'text-lime-600 dark:text-lime-600'
          : check_route == '/inputform'}">
              <span 
              class="flex items-center justify-center w-5 h-5 mr-2 text-xs border rounded-full shrink-0"
              :class="check_route == '/inputform' ? 'border-lime-600 dark:border-lime-600' : 'border-purple-600 dark:border-purple-400'">
                  3
              </span>
              Personal <span class="hidden sm:inline-flex sm:ml-2">Information</span>
              <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
          </li>
          <li class="flex items-center"
          :class="{'text-lime-600 dark:text-lime-600'
          : check_route == '/selectdata'}">
              <span 
              class="flex items-center justify-center w-5 h-5 mr-2 text-xs border rounded-full shrink-0"
              :class="check_route == '/selectdata' ? 'border-lime-600 dark:border-lime-600' : 'border-purple-600 dark:border-purple-400'">
                  4
              </span>
              Details <span class="hidden sm:inline-flex sm:ml-2">Services</span>
      
          </li>
      </ol>

    </nav>
  </div>
  

</template>