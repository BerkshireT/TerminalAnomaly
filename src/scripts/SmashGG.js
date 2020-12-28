/* eslint-disable */
function Request(lan, game, miles, location) {
   console.log(lan)
   console.log(game)
   console.log(miles)
   console.log(location)

   let key = process.env.VUE_APP_SMASHGG_API
   console.log(key)

   let result = []
   return result
}

function Verify(lan, game, miles, location) {
   console.log(lan + "verified")
   console.log(game + "verified")
   console.log(miles + "verified")
   console.log(location + "verified")

   let verified = true

   if (verified) {
      return null
   }

   return "error message"
   
}

export default { Request, Verify }
export { Request, Verify }