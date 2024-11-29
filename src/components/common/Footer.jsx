import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#480ca8",
                py: 4,
                color: "white",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.5" }}
                        >
                            Discover
                        </Typography>
                        <Box sx={{ pl: 0, fontSize: "14px" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        sx={{ fontSize: "14px", lineHeight: "1.8" }}
                                    >
                                        <Link href="#" color="inherit" underline="none">
                                            Home
                                        </Link>
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        sx={{ fontSize: "14px", lineHeight: "1.8" }}
                                    >
                                        <Link href="#" color="inherit" underline="none">
                                            Terms
                                        </Link>
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        sx={{ fontSize: "14px", lineHeight: "1.8" }}
                                    >
                                        <Link href="#" color="inherit" underline="none">
                                            Talent & Culture
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        sx={{ fontSize: "14px", lineHeight: "1.8" }}
                                    >
                                        <Link href="#" color="inherit" underline="none">
                                            Refund Policy
                                        </Link>
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        sx={{ fontSize: "14px", lineHeight: "1.8" }}
                                    >
                                        <Link href="#" color="inherit" underline="none">
                                            EMI Policy
                                        </Link>
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        gutterBottom
                                        sx={{ fontSize: "14px", lineHeight: "1.8" }}
                                    >
                                        <Link href="#" color="inherit" underline="none">
                                            Privacy Policy
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.5" }}
                        >
                            Payment Methods
                        </Typography>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(1, 1fr)",
                                gap: "8px",
                            }}
                        >
                            <img
                                src="https://signup.sslcommerz.com/assets/global/img/paywith_mobile_versionW.png"
                                alt="Payment Method"
                                style={{ maxWidth: "80%" }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.5" }}
                        >
                            Need Help?
                        </Typography>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ fontSize: "14px", lineHeight: "1.8" }}
                        >
                            We&apos;re here for you 24/7! Reach out to us through Messenger or
                            call anytime, day or night, for the support you need.
                        </Typography>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                lineHeight: "1.5",
                                mt: 2,
                            }}
                        >
                            Experience Center
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "14px", lineHeight: "1.8" }}
                        >
                            HealthBridge, Dhaka
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.5" }}
                        >
                            Contact
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "14px", lineHeight: "1.8" }}
                        >
                            info@healthbridge.com
                            <br />
                            +88 09678 232425
                        </Typography>
                        <Box sx={{ display: "flex", gap: "12px", mt: 2 }}>
                            <Link
                                href="https://www.facebook.com/innovatica.software"
                                color="inherit"
                                underline="none"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    backgroundColor: "#3b5998",
                                    color: "white",
                                    transition: "background-color 0.3s",
                                    "&:hover": {
                                        backgroundColor: "#2d4373",
                                    },
                                }}
                            >
                                <Facebook />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/innovatica-software-lab-ltd"
                                color="inherit"
                                underline="none"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    backgroundColor: "#0A66C2",
                                    color: "white",
                                    transition: "background-color 0.3s",
                                    "&:hover": {
                                        backgroundColor: "#003b75",
                                    },
                                }}
                            >
                                <LinkedIn />
                            </Link>
                            <Link
                                href="https://www.instagram.com/innovatica_software"
                                color="inherit"
                                underline="none"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    backgroundColor: "#E4405F",
                                    color: "white",
                                    transition: "background-color 0.3s",
                                    "&:hover": {
                                        backgroundColor: "#D81B60",
                                    },
                                }}
                            >
                                <Instagram />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ mt: 2 }} />
                <Box
                    sx={{
                        mt: 2,
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{ fontSize: "14px", lineHeight: "1.5" }}
                    >
                        © Copyright HealthBridge
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
export default Footer;