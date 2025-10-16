import React from 'react'
// import Card from './components/Card'
// import Profile from './components/Profile'
import PropP from './components/PropP'

const App = () => {

const arr = [
  {
    "companyLogo": "https://tse1.mm.bing.net/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?pid=Api&P=0&h=180",
    "companyName": "Google",
    "postDate": "5 hours ago",
    "post": "Senior Software Engineer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "pay": "$85/hr",
    "location": "Mountain View, USA"
  },
  {
    "companyLogo": "https://logo.clearbit.com/microsoft.com",
    "companyName": "Microsoft",
    "postDate": "1 day ago",
    "post": "Cloud Solutions Architect",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "pay": "$72/hr",
    "location": "Redmond, USA"
  },
  {
    "companyLogo": "https://logo.clearbit.com/amazon.com",
    "companyName": "Amazon",
    "postDate": "3 hours ago",
    "post": "Backend Developer",
    "tag1": "Contract",
    "tag2": "Mid Level",
    "pay": "$68/hr",
    "location": "Seattle, USA"
  },
  {
    "companyLogo": "https://logo.clearbit.com/apple.com",
    "companyName": "Apple",
    "postDate": "2 days ago",
    "post": "iOS Developer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "pay": "$77/hr",
    "location": "Cupertino, USA"
  },
  {
    "companyLogo": "https://logo.clearbit.com/meta.com",
    "companyName": "Meta",
    "postDate": "6 hours ago",
    "post": "Machine Learning Engineer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "pay": "$90/hr",
    "location": "Menlo Park, USA"
  },
  {
    "companyLogo": "https://logo.clearbit.com/netflix.com",
    "companyName": "Netflix",
    "postDate": "1 day ago",
    "post": "DevOps Engineer",
    "tag1": "Contract",
    "tag2": "Mid Level",
    "pay": "$65/hr",
    "location": "Los Gatos, USA"
  },
  {
    "companyLogo": "https://logo.clearbit.com/airbnb.com",
    "companyName": "Airbnb",
    "postDate": "4 hours ago",
    "post": "Frontend Developer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "pay": "$70/hr",
    "location": "San Francisco, USA"
  },
  {
    "companyLogo": "https://logo.clearbit.com/stripe.com",
    "companyName": "Stripe",
    "postDate": "5 hours ago",
    "post": "Security Engineer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "pay": "$88/hr",
    "location": "Remote"
  },
  {
    "companyLogo": "https://logo.clearbit.com/salesforce.com",
    "companyName": "Salesforce",
    "postDate": "3 days ago",
    "post": "Software Engineer - CRM",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "pay": "$66/hr",
    "location": "San Francisco, USA"
  },
  {
    "companyLogo": "https://logo.clearbit.com/shopify.com",
    "companyName": "Shopify",
    "postDate": "7 hours ago",
    "post": "Full Stack Developer",
    "tag1": "Remote",
    "tag2": "Mid Level",
    "pay": "$69/hr",
    "location": "Remote"
  }
];


  return (
    <div className="parent">
      {arr.map(function(ele, idx) {

        return <div key={idx}>
          <PropP logo={ele.companyLogo} name={ele.companyName} date={ele.postDate} post={ele.post} tag1={ele.tag1} tag2={ele.tag2}  salary={ele.pay} location={ele.location}/>
        </div>
      })}
    </div>
    
  )
}

export default App
