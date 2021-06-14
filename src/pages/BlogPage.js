import React from 'react';
import { useParams } from "react-router";
import BlogPostContainer from '../containers/BlogPostContainer';


function BlogPage(props) {
    let { cityId } = useParams();
        console.log('cityId in BlogPage', cityId)
    if(cityId) {
        return(
            <>        
                <BlogPostContainer cityId={cityId} />    
            </>
        );
    } 
    return(
        <div>Please pick a city</div>
    )
    
}

export default BlogPage;