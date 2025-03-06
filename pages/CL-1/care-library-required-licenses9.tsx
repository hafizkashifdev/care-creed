import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicenses9: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1080px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "24px",
        boxSizing: "border-box",
        gap: "12px",
        textAlign: "left",
        fontSize: "40px",
        color: "#0246bc",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          alignSelf: "stretch",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "10px",
          gap: "10px",
        }}
      >
        <Image
          style={{
            width: "48px",
            position: "relative",
            height: "48px",
            overflow: "hidden",
            flexShrink: "0",
            cursor: "pointer",
          }}
          width={48}
          height={48}
          alt=""
          src="/CL-1/back-icon3.svg"
          onClick={onBackIconClick}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                width: "1138px",
                position: "relative",
                display: "inline-block",
                fontWeight: "700",
              }}
            >
              Purpose of Product Certification
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          borderRadius: "12px",
          backgroundColor: "#fff",
          borderWidth: "2px",
          borderStyle: "dashed",
          borderColor: "#0246bc",
          boxSizing: "border-box",
          height: "952px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "16px",
          textAlign: "justify",
          fontSize: "24px",
          color: "rgba(0, 0, 0, 0.74)",
        }}
      >
        <Box sx={{ flex: 1, position: "relative" }}>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              Purpose of Product Certification:
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                The CQC certification is essential for Care Library as it
                guarantees compliance with the Health and Social Care Act 2008,
                ensuring high-quality care services.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                It serves to protect and promote the health, safety, and welfare
                of individuals receiving care, a core mission for Care Library.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Certification ensures that Care Library meets the fundamental
                standards of quality and safety expected in the care sector.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                It enhances accountability and transparency, assuring clients
                and their families that Care Library prioritises safe and
                effective care.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                By obtaining CQC certification, Care Library can demonstrate its
                commitment to continuous improvement and adherence to industry
                best practices.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                The certification process includes a comprehensive assessment of
                services offered, governance, and care delivery protocols,
                crucial for building trust with clients.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                CQC registration allows Care Library to operate legally within
                the UK, a requirement for any health and social care provider.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                It enables ongoing monitoring and inspection by CQC to ensure
                compliance with care standards, promoting a culture of safety
                and quality.
              </Typography>
            </li>
            <li>
              <Typography variant="inherit" component="span">
                Ultimately, the certification aligns with Care Library's vision
                of positively impacting individuals' lives through excellent
                care services.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredLicenses9;
