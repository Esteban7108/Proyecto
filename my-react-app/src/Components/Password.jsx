import React from 'react'

const Password = () => {
  return (
    <div class="space-y-5" data-hs-toggle-password-group="">
 
  <div class="max-w-sm">
    <label for="hs-toggle-password-multi-toggle-np" class="block text-sm mb-2">New password</label>
    <div class="relative">
      <input id="hs-toggle-password-multi-toggle-np" type="password" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter new password"/>
      <button type="button" data-hs-toggle-password='{
          "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
        }' class="absolute top-0 end-0 p-3.5 rounded-e-md">
        <svg class="flex-shrink-0 size-3.5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path class="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
          <path class="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
          <path class="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
          <line class="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
          <path class="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
          <circle class="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
        </svg>
      </button>
    </div>
</div>
  <div class="max-w-sm mb-5">
    <label for="hs-toggle-password-multi-toggle" class="block text-sm mb-2">Current password</label>
    <div class="relative">
      <input id="hs-toggle-password-multi-toggle" type="password" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter current password" value="12345qwerty"></input>
      <button type="button" data-hs-toggle-password='{
          "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
        }' class="absolute top-0 end-0 p-3.5 rounded-e-md">
        <svg class="flex-shrink-0 size-3.5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path class="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
          <path class="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
          <path class="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
          <line class="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
          <path class="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
          <circle class="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
        </svg>
      </button>
    </div>
  </div>

</div>
  )
}

export default Password