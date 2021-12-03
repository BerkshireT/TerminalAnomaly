<template>
   <div>
      <button v-if="isPreviousButtonDisabled" class="button-disabled" v-html="previous" disabled="true"/>
      <button v-else class="button" v-html="previous" @click="previousPage" />

      <button v-if="isNextButtonDisabled" class="button-disabled" v-html="next" disabled="true"/>
      <button v-else class="button" v-html="next" @click="nextPage" />
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
.button {
   font-size: 5em;
   color: #fffb96;
}

.button-disabled {
   font-size: 5em;
   opacity: 0;
}

.button:active {
   color: white;
}
</style>