import { useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { FiUser } from 'react-icons/fi';
import { logout } from "../../features/user/Login/loginSlice";
export const Navbar = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: "smooth" });
            window.scrollTo({
                top: targetScroll,
                behavior: "smooth",
            });
            setOpen(false);
        }
    };

    return (
        <Box>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: "rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(24px)",
                    boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
                    backgroundImage: "none",
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexShrink: 0,
                            maxHeight: 40,
                        }}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                                ml: "-18px",
                                px: 0,
                            }}
                        >
                            <Link to="/" style={{ marginRight: '20px' }}>
                                <Typography variant="h5" className="text-black text-xl">
                                MedEase
                                </Typography>
                            </Link>
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <MenuItem
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Link to='/medicine/store'>
                                        <Typography variant="body2" color="text.primary">
                                            Medicine
                                        </Typography></Link>
                                </MenuItem>
                                <MenuItem
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Link to='/nurses'>
                                        <Typography variant="body2" color="text.primary">
                                            Nurse
                                        </Typography></Link>
                                </MenuItem>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: 0.5,
                                alignItems: "center",
                            }}
                        >
                            {user ?
                                <div>
                                    {
                                        user?.role === 'doctor' ? <Link to="/doctor-info">
                                            {
                                                user?.avatar?.url ? <img src={user?.avatar?.url} alt="" className="h-8 w-8 border rounded-full" /> 
                                                : <FiUser className="text-4xl border rounded-full p-2"/>
                                            }

                                        </Link> : <Link to="/user/info">
                                            {
                                                user?.avatar?.url ? <img src={user?.avatar?.url} alt="" className="h-8 w-8 border rounded-full" /> : <FiUser className="text-4xl border rounded-full p-2"/>
                                            }
                                        </Link>
                                    }
                                </div> :
                                <div className="flex gap-4">
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        size="small"
                                        component={Link}
                                        to="/user/login"
                                    >
                                        Sign in
                                    </Button>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        size="small"
                                        component={Link}
                                        to="/user/register"

                                    >
                                        Register
                                    </Button></div>}
                        </Box>
                        <Box sx={{ display: { sm: "", md: "none" } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: "30px", p: "4px" }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: "60dvw",
                                        p: 2,
                                        backgroundColor: "background.paper",
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "end",
                                            flexGrow: 1,
                                        }}
                                    >
                                        {/* Add additional content if needed */}
                                    </Box>
                                    <MenuItem onClick={() => scrollToSection("features")}>
                                        <Link to='/medicine/store'>
                                            <Typography variant="body2" color="text.primary">
                                                Medicine
                                            </Typography></Link>
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("testimonials")}>
                                        <Link to='/nurses'>
                                            <Typography variant="body2" color="text.primary">
                                                Nurse
                                            </Typography></Link>
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("faq")}>
                                        <Link to='/faq'>
                                            <Typography variant="body2" color="text.primary">
                                                FAQ
                                            </Typography></Link>
                                    </MenuItem>
                                    <Divider />
                                    {user ? (
            <>
                <MenuItem>
                    <Link to="/user/info">
                        <Typography variant="body2" color="text.primary">
                            User Details
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/user/password-change">
                        <Typography variant="body2" color="text.primary">
                            Password Change
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/user/orders-history">
                        <Typography variant="body2" color="text.primary">
                            Orders History
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/user/prescription-history">
                        <Typography variant="body2" color="text.primary">
                            Prescription History
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/user/nurses-book-history">
                        <Typography variant="body2" color="text.primary">
                            Nurses Book History
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Button
                        color="primary"
                        variant="outlined"
                        component={Link}
                        sx={{ width: "100%" }}
                        onClick={() => dispatch(logout())}
                    >
                        Sign Out
                    </Button>
                </MenuItem>
            </>
        ) : (
            <>
                <MenuItem>
                    <Button
                        color="primary"
                        variant="contained"
                        component={Link}
                        to="/user/register"
                        sx={{ width: "100%" }}
                    >
                        Sign up
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button
                        color="primary"
                        variant="outlined"
                        component={Link}
                        to="/user/login"
                        sx={{ width: "100%" }}
                    >
                        Sign in
                    </Button>
                </MenuItem>
            </>
        )}
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navbar;
