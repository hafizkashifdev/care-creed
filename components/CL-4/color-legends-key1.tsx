import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export type ColorLegendsKey1Type = {
  className?: string;
};

const ColorLegendsKey1: NextPage<ColorLegendsKey1Type> = ({
  className = "",
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        boxShadow: 1,
        backgroundColor: "#fff",
        borderWidth: "2.7px",
        borderStyle: "dashed",
        borderColor: "#000",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "21.3px",
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "auto",
        textAlign: "left",
        fontSize: "14px",
        color: "#1e1e1e",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "21.3px",
        }}
      >
        <Box
          sx={{
            width: "353.7px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "9px",
            textAlign: "center",
            color: "#7d8998",
          }}
        >
          <Box
            sx={{
              width: "21.3px",
              backgroundColor: "#7d8998",
              height: "21.3px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "4.3px",
              boxSizing: "border-box",
            }}
          >
            <Image
              style={{
                width: "14.2px",
                position: "relative",
                height: "14.2px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              className={className}
              width={14}
              height={14}
              alt=""
              src="/CL-4/bucket-11.svg"
            />
          </Box>
          <Typography
            variant="inherit"
            component="b"
            sx={{ position: "relative", fontWeight: "700" }}
          >
            Color Legends (Key)
          </Typography>
        </Box>
        <Box
          sx={{
            width: "353.7px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "13.3px",
          }}
        >
          <Box
            sx={{
              width: "40px",
              position: "relative",
              borderRadius: "5.6px",
              backgroundColor: "#00843d",
              height: "40px",
            }}
          />
          <Typography
            variant="inherit"
            component="b"
            sx={{ position: "relative", fontWeight: "700" }}
          >
            All Dev Work Completed
          </Typography>
        </Box>
        <Box
          sx={{
            width: "353.7px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "13.3px",
          }}
        >
          <Box
            sx={{
              width: "40px",
              position: "relative",
              borderRadius: "5.6px",
              backgroundColor: "#e32017",
              height: "40px",
            }}
          />
          <Typography
            variant="inherit"
            component="b"
            sx={{ position: "relative", fontWeight: "700" }}
          >{`Third Party API Dependency `}</Typography>
        </Box>
        <Box
          sx={{
            width: "353.7px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "13.3px",
          }}
        >
          <Box
            sx={{
              width: "40px",
              position: "relative",
              borderRadius: "5.6px",
              backgroundColor: "#e86a10",
              height: "40px",
            }}
          />
          <Typography
            variant="inherit"
            component="b"
            sx={{ position: "relative", fontWeight: "700" }}
          >
            Development In Progress
          </Typography>
        </Box>
        <Box
          sx={{
            width: "353.7px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "13.3px",
          }}
        >
          <Box
            sx={{
              width: "40px",
              position: "relative",
              borderRadius: "5.6px",
              backgroundColor: "#1c3f95",
              height: "40px",
            }}
          />
          <Typography
            variant="inherit"
            component="b"
            sx={{
              width: "210px",
              position: "relative",
              display: "inline-block",
              whiteSpace: "pre-wrap",
              flexShrink: "0",
              fontWeight: "700",
            }}
          >{`Only Requirements Completed  `}</Typography>
        </Box>
        <Box
          sx={{
            width: "353.7px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "13.3px",
          }}
        >
          <Box
            sx={{
              width: "40px",
              position: "relative",
              borderRadius: "5px",
              backgroundColor: "#00a4a6",
              height: "40px",
            }}
          />
          <Typography
            variant="inherit"
            component="b"
            sx={{ position: "relative", fontWeight: "700" }}
          >{`Only Front-end Done `}</Typography>
        </Box>
        <Box
          sx={{
            width: "353.7px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <Box
            sx={{
              width: "40px",
              position: "relative",
              borderRadius: "5.6px",
              backgroundColor: "#5e0a87",
              height: "40px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "5.3px",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{ position: "relative", fontWeight: "700" }}
            >
              Ready For Development
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "353.7px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "13.3px",
          }}
        >
          <Box
            sx={{
              width: "40px",
              position: "relative",
              borderRadius: "5.6px",
              backgroundColor: "#a0a5a9",
              height: "40px",
            }}
          />
          <Typography
            variant="inherit"
            component="b"
            sx={{ position: "relative", fontWeight: "700" }}
          >
            Pending (Requirement not clear)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ColorLegendsKey1;
