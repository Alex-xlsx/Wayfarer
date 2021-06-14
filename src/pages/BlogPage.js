import React from 'react';
import { useParams } from "react-router";
import BlogPostContainer from '../containers/BlogPostContainer';


function BlogPage(props) {
    let cityId = useParams();
    if(cityId) {
        console.log('cityId in BlogPage', cityId)
        return(
            <>        
                <BlogPostContainer cityId={cityId} />    
            </>
        );
    }
}

export default BlogPage;