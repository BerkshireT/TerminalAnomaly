<template>
   <div>
      <v-btn text large class="button pb-2" outline color="#fffb96" v-html="previous" :disabled="isPreviousButtonDisabled" @click.native="previousPage" />
      <v-btn text large class="button pb-2" outline color="#fffb96" v-html="next" :disabled="isNextButtonDisabled" @click.native="nextPage" />
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
         previous: "&#8678",
         next: "&#8680",
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
}

.button:hover {
  box-shadow: 0 0 20px #fffb96;
}
</style>