import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

export default function Error() {
  const meta = {
    meta : {
      property : {
        'og.description' : "Error Page",
        'og.title': 'Error Title'
      }
    }
  }
  return (
    <div>
         <div>
         <Helmet
            meta={[
                  {"property": "og:type", "content": "video.other"},
                  {"property": "og:image", "content": "https://www.w3schools.com/css/trolltunga.jpg"},
                  {"property": "og:title", "content": "My Title"},
                  {"property": "og:url", "content": "https://www.afnity.com/video/155"},
                  {"property": "og:description", "content": "some discription of the shared    content"}
          ]}
        />
        </div>
      <Hero>
        <Banner title='404' subtitle='page not found'>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
    </div>
  )
}
