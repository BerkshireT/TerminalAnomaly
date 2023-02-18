<template>
   <div>
      <button v-if="isPreviousButtonDisabled" :class="$vuetify.breakpoint.smAndUp ? 'button-disabled' : 'button-disabled-m'" v-html="previous" disabled="true"/>
      <button v-else :class="$vuetify.breakpoint.smAndUp ? 'button' : 'button-m'" v-html="previous" @click="previousPage" />

      <button v-if="isNextButtonDisabled" :class="$vuetify.breakpoint.smAndUp ? 'button-disabled' : 'button-disabled-m'" v-html="next" disabled="true"/>
      <button v-else :class="$vuetify.breakpoint.smAndUp ? 'button' : 'button-m'" v-html="next" @click="nextPage" />
   </div>
</template>

<script>
export default {
   props: {
      currentPage: {
         type: Number,
         required: true
      },
      pageCount: {
         type: Number,
         required: true
      }
   },
   data() {
      return {
         previous: "&#129152",
         next: "&#129154",
      }
   },
   computed: {
      isPreviousButtonDisabled: function() {
         return this.currentPage === 1
      },
      isNextButtonDisabled: function() {
         return this.currentPage === this.pageCount
      }
   },
   methods: {
      nextPage() {
         this.$emit('nextPage')
      },
      previousPage() {
         this.$emit('previousPage')
      }
   }
}
</script>


<style scoped>
* {
   box-shadow: none;
}

.button {
   font-size: 4em;
   color: #fffb96;
   transition: all .5s ease;
}

.button-m {
   font-size: 3em;
   color: #fffb96;
   box-shadow: none;
}

.button-disabled {
   font-size: 5em;
   opacity: 0;
}

.button-disabled-m {
   font-size: 3em;
   opacity: 0;
   box-shadow: none;
}

.button:active {
   color: white;
   box-shadow: none;
}

.button:hover {
   box-shadow: 0 0 20px #fffb96;
}
</style>
