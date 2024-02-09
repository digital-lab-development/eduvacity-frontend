import React from "react"
import HomePageLayout from "../../src/views/home/layout"

export default function ProgramsPage() {
  return <div>Programs Page</div>
}
ProgramsPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
