'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { 
  FaTiktok, 
  FaInstagram, 
  FaSnapchatGhost, 
  FaYoutube, 
  FaRedditAlien 
} from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'

export default function Home() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      document.head.appendChild(script)
    }

    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const instagramScript = document.createElement('script')
      instagramScript.src = '//www.instagram.com/embed.js'
      instagramScript.async = true
      document.head.appendChild(instagramScript)
    }

    if (!document.querySelector('script[src="https://embed.reddit.com/widgets.js"]')) {
      const redditScript = document.createElement('script')
      redditScript.src = 'https://embed.reddit.com/widgets.js'
      redditScript.async = true
      redditScript.charset = 'UTF-8'
      document.head.appendChild(redditScript)
    }
  }, [])

  const socialIcons = [
    { 
      name: 'TikTok', 
      icon: <FaTiktok />, 
      url: 'https://www.tiktok.com/@youstilldontknowme82',
      className: 'social-tiktok'
    },
    { 
      name: 'Instagram', 
      icon: <FaInstagram />, 
      url: 'https://www.instagram.com/petite.princessxo',
      className: 'social-instagram'
    },
    { 
      name: 'Snapchat', 
      icon: <FaSnapchatGhost />, 
      url: 'https://www.snapchat.com/@brooklyn-rosexo',
      className: 'social-snapchat'
    },
    { 
      name: 'Twitter', 
      icon: <RiTwitterXFill />, 
      url: 'https://x.com/brooklynrose869',
      className: 'social-twitter'
    },
    { 
      name: 'Reddit', 
      icon: <FaRedditAlien />, 
      url: 'https://www.reddit.com/user/Brooklynxrose/',
      className: 'social-reddit'
    },
    { 
      name: 'YouTube', 
      icon: <FaYoutube />, 
      url: 'https://www.youtube.com/@youdontknowme82',
      className: 'social-youtube'
    }
  ]

  const linkButtons = [
    { 
      title: "Exclusive Content ;)", 
      url: "https://juicy.bio/brooklynrose",
      className: "link-button-blue"
    },
    { 
      title: "TikTok", 
      url: "https://www.tiktok.com/@youstilldontknowme82",
      className: "link-button"
    },
    { 
      title: "Instagram", 
      url: "https://www.instagram.com/petite.princessxo",
      className: "link-button"
    },
    { 
      title: "Snapchat", 
      url: "https://www.snapchat.com/@brooklyn-rosexo",
      className: "link-button"
    },
    { 
      title: "Twitter/X", 
      url: "https://x.com/brooklynrose869",
      className: "link-button"
    },
    { 
      title: "Reddit", 
      url: "https://www.reddit.com/user/Brooklynxrose/",
      className: "link-button"
    },
    { 
      title: "YouTube", 
      url: "https://www.youtube.com/@youdontknowme82",
      className: "link-button"
    }
  ]

  return (
    <div className="container">
      {/* Header with Subscribe and Share */}
      <div className="header">

      </div>

      {/* Profile Section */}
      <div className="profile-section">
        {/* Profile Picture with Gradient Border */}
        <div className="profile-picture">
          <div className="profile-border">
            <div className="profile-inner">
              <Image
                src="/BR.JPEG"
                alt="Brooklyn Rose"
                width={120}
                height={120}
                className="profile-image"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Name */}
        <h1 className="profile-name">✨Brooklyn Rose💕</h1>
        
        {/* Social Icons Row */}
        <div className="social-icons">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${social.className}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Link Buttons */}
      <div className="link-buttons">
        {linkButtons.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={link.className}
          >
            <div className="link-title">{link.title}</div>
          </a>
        ))}
      </div>

      {/* TikTok Videos Section */}
      <div className="tiktok-section">
        <div className="tiktok-scroll-container">
          <div className="tiktok-video">
            <iframe
              src="https://www.tiktok.com/embed/7448334536733150506"
              width="320"
              height="700"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
              title="TikTok video 1"
            ></iframe>
          </div>
          
          <div className="tiktok-video">
            <iframe
              src="https://www.tiktok.com/embed/7397489337752898859"
              width="320"
              height="700"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
              title="TikTok video 2"
            ></iframe>
          </div>
          
          <div className="tiktok-video">
            <iframe
              src="https://www.tiktok.com/embed/7421580804960292142"
              width="320"
              height="700"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
              title="TikTok video 3"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="instagram-section">
        <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DMQtTOTSQZZ/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style={{background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'99.375%'}}>
          <div style={{padding:'16px'}}>
            <a href="https://www.instagram.com/p/DMQtTOTSQZZ/?utm_source=ig_embed&utm_campaign=loading" style={{background:'#FFFFFF', lineHeight:0, padding:'0 0', textAlign:'center', textDecoration:'none', width:'100%'}} target="_blank" rel="noopener noreferrer">
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px'}}></div>
                <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center'}}>
                  <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px'}}></div>
                  <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px'}}></div>
                </div>
              </div>
              <div style={{padding: '19% 0'}}></div>
              <div style={{display:'block', height:'50px', margin:'0 auto 12px', width:'50px'}}>
                <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                      <g>
                        <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div style={{paddingTop: '8px'}}>
                <div style={{color:'#3897f0', fontFamily:'Arial,sans-serif', fontSize:'14px', fontStyle:'normal', fontWeight:'550', lineHeight:'18px'}}>View this post on Instagram</div>
              </div>
              <div style={{padding: '12.5% 0'}}></div>
              <div style={{display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center'}}>
                <div>
                  <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)'}}></div>
                  <div style={{backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px'}}></div>
                  <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)'}}></div>
                </div>
                <div style={{marginLeft: '8px'}}>
                  <div style={{backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px'}}></div>
                  <div style={{width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)'}}></div>
                </div>
                <div style={{marginLeft: 'auto'}}>
                  <div style={{width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)'}}></div>
                  <div style={{backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)'}}></div>
                  <div style={{width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)'}}></div>
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: '24px'}}>
                <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '224px'}}></div>
                <div style={{backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '144px'}}></div>
              </div>
            </a>
          </div>
        </blockquote>
      </div>

      {/* Twitter Section       

      <div className="twitter-section">
        <blockquote className="twitter-tweet">
          <p lang="zxx" dir="ltr">
            <a href="https://t.co/aZLcOlIwhi">pic.twitter.com/aZLcOlIwhi</a>
          </p>
          &mdash; office dundies (@officedundies) <a href="https://twitter.com/officedundies/status/1947856672384287048?ref_src=twsrc%5Etfw">July 23, 2025</a>
        </blockquote>
      </div>
      */}

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <p>© 2025 Brooklyn Rose. All rights reserved.</p>
        </div>
      </div>
    </div>

    
  )
}