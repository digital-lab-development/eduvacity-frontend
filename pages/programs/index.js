import { useState } from "react"
import HomePageLayout from "../../src/views/home/layout"
import { Box, Button, Typography } from "@mui/material"
import JoinWaitlistDialog from "../../src/components/waitlistdialog"

export default function ProgramsPage() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          minHeight: "60vh",
          pt: { xs: 8, md: 15.5 },
          pb: { xs: 8, md: 6.5 },
        }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{
            textAlign: "center",
          }}
        >
          Want to be notified when we launch? Join the waitlist!
        </Typography>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            padding: "12px 20px 12px 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "46px",
          }}
        >
          Join Waitlist
        </Button>
      </Box>
      <JoinWaitlistDialog open={open} handleClose={handleClose} />
    </>
  )
}
ProgramsPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
