import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import OpenInNew from "@mui/icons-material/OpenInNew";

interface ProjectCardProps {
    href?: string;
    imagePath: string;
    title: string;
    description: string;
    linkTitle: string;
}


export default function ProjectCard({ href, linkTitle, imagePath, title, description }: ProjectCardProps) {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                mb: 5,
            }}
        >
            <a href={href} target={"_blank"}>
                <Box
                    sx={{
                        transition: "all .2s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                        boxShadow: 15,
                        position: "relative",
                        borderRadius: 12,
                        mb: { xs: 3, lg: 0 },
                        height: { xs: 250, md: 400 },
                        width: { xs: "85vw", sm: "75vw", md: 600 },
                    }}
                >
                    <Image
                        src={imagePath}
                        fill
                        alt="pic"
                        style={{
                            borderRadius: 12,
                        }}
                    />
                </Box>
            </a>
            <Box
                sx={{
                    px: { xs: 0, lg: 5 },
                    textAlign: "left",
                    maxWidth: 900,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        display: "block",
                        mb: 2,
                        color: "text.secondary",
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {description}
                </Typography>
                {href && <Link href={href} target={"_blank"}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1" color="primary">
                            {linkTitle}
                        </Typography>
                        <OpenInNew fontSize="small" sx={{ pl: 1 }} />
                    </Box>
                </Link>}
                {!href && <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" color="primary">
                        {linkTitle}
                    </Typography>
                </Box>}
            </Box>
        </Box>
    )
}