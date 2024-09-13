import DefaultLayout from '@/components/layout/DefaultLayout'
import { SingleBlogPostComponent } from '@/components/blog/single-blog-post'
import React from 'react'

function SingleBlogPage() {
  return (
   
        <DefaultLayout>
            <SingleBlogPostComponent />
        </DefaultLayout>

  )
}

export default SingleBlogPage