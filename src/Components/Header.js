import React from 'react'

export const Header = () => {
  return (
    <div className="absolute flex justify-between z-10 w-full">
        <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
      <button className="px-4 py-2 bg-blue-500 text-white">LogOut</button>
    </div>
  )
}
