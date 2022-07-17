import React from "react";
import { Formik, Form, Field } from 'formik';


const Header = ({setPhotos}) => {
   
  return (
    <header className='p-2 bg-sky-700 sticky top-0'>
      
      <div className="container mx-auto flex justify-between ">
          <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                'Authorization': 'Client-ID qvy2y7fRCE_mIZrDJ8fevnKO8Mm29ZYhiXQSRq70mOw'
              }
            })
            const data = await response.json()
            setPhotos(data.results)
          }}
         >
          <Form>
            <Field name='search' placeholder="Busca una imagen" className="h-12 w-96 pl-10 pr-20 z-0 focus:shadow focus:outline-none"/>
                <button class="h-12 w-20 text-white bg-red-500 hover:bg-red-600">Search</button>
          </Form>
        </Formik>

        <h1 className="text-neutral-50 text-4xl">Imalive</h1>
        </div>

        
    </header>

  )
}

export default Header;