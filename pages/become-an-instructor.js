import React from "react"
import HomePageLayout from "../src/views/home/layout"

export default function BecomeAnInstructor() {
  return <div>Become an instructor</div>
}

BecomeAnInstructor.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
