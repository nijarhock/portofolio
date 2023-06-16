import React from "react";

export default function Contact() {
  return (
    <div className='flex-1 min-h-fit mt-9'>
      <div className='mb-4  pb-2 max-h-fit'>
        <p className='text-4xl font-bold'>Contact</p>
        <div className='border-b-2 max-h-fit'></div>
      </div>
      <div className="flex justify-center">
        <table className="border-collapse border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th className="w-1/2 border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Email</th>
              <th className="w-1/2 border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">nijarixa@gmail.com</th>
            </tr>
            <tr>
              <th className="w-1/2 border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Telp</th>
              <th className="w-1/2 border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">+6283120755666</th>
            </tr>
            <tr>
              <th className="w-1/2 border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Whatsapp</th>
              <th className="w-1/2 border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">+6283120755666 / +6281224916193</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}