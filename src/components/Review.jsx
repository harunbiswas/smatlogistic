import Image from 'next/image'
import { useEffect } from 'react'

export default function Review() {
    useEffect(()=>{
        var aScript = document.createElement('script');
        aScript.type = 'text/javascript';
        aScript.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
        aScript.async = "true"
        document.head.appendChild(aScript);

        aScript.onload = function () {
            var trustbox = document.getElementById('trustbox');
            window.Trustpilot.loadFromElement(trustbox);
          
        };

      
    },[])


  return (
    <div className='home-contac'>
      <div className='home-contact-card'>     
      
<div className="trustpilot-widget" data-locale="en-GB" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="6048a55782d4930001d2fdfe" data-style-height="52px" data-style-width="100%">
  <a href="https://uk.trustpilot.com/review/thesmartlogistics.com" target="_blank" rel="noopener">Trustpilot</a>
</div>

      </div>
    </div>
  )
}
