import Layout from "../components/layout"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"

export default function IndexPage() {
  const { data: session } = useSession()
  
  if(!session){
    return (
      <Layout>
        <h1>Sign in to view my Github profile</h1>
      </Layout>
    )
  }
  
  return (
    <Layout>
      <h1>NextAuth with Github Sign In</h1>
      <p>
        Used a template code from nextAuth's official documentation to try out next auth{" "}
        <br></br>
        Check out my <a href="https://github.com/jyotishmanshandilya?tab=repositories">GitHub</a> profile
      </p>
    </Layout>
  )
}
