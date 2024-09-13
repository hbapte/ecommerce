import { BlogPageComponent } from '@/components/blog/blog-page'
import DefaultLayout from '@/components/layout/DefaultLayout'
import React from 'react'

function BlogPage() {
  return (
   
        <DefaultLayout>
            <BlogPageComponent/>
        </DefaultLayout>

  )
}

export default BlogPage