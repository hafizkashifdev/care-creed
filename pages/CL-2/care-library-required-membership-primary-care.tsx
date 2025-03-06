import type { NextPage } from "next";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredMembershipPrimaryCare: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-2/care-library-required-memberships");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push(
      "/care-library-required-membership-primary-care-purpose-of-product-certification"
    );
  }, [router]);

  const onFrameContainerClick1 = useCallback(() => {
    router.push(
      "/care-library-required-membership-primary-care-where-to-apply"
    );
  }, [router]);

  const onFrameContainerClick2 = useCallback(() => {
    router.push(
      "/care-library-required-membership-primary-care-eligibility-criteria"
    );
  }, [router]);

  const onFrameContainerClick3 = useCallback(() => {
    router.push(
      "/care-library-required-membership-primary-care-application-process"
    );
  }, [router]);

  const onFrameContainerClick4 = useCallback(() => {
    router.push(
      "/care-library-required-membership-primary-care-required-documents"
    );
  }, [router]);

  const onFrameContainerClick5 = useCallback(() => {
    router.push(
      "/care-library-required-membership-primary-care-cost-breakdown"
    );
  }, [router]);

  const onFrameContainerClick6 = useCallback(() => {
    router.push(
      "/care-library-required-membership-primary-care-timeline-for-certification"
    );
  }, [router]);

  const onFrameContainerClick7 = useCallback(() => {
    router.push(
      "/care-library-required-membership-primary-care-validity-of-the-certificate"
    );
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1122px",
        textAlign: "left",
        fontSize: "70px",
        color: "#0246bc",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "39px",
          left: "66px",
          width: "1688px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "46.4px",
        }}
      >
        <Image
          style={{
            width: "100px",
            position: "relative",
            height: "100px",
            overflow: "hidden",
            flexShrink: "0",
            cursor: "pointer",
          }}
          width={100}
          height={100}
          alt=""
          src="/CL-2/back-icon1.svg"
          onClick={onBackIconClick}
        />
        <Box sx={{ flex: 1, position: "relative", fontWeight: "600" }}>
          Primary Care
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "195px",
          left: "66px",
          width: "1771px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          alignContent: "flex-start",
          gap: "40px 20px",
          textAlign: "center",
          fontSize: "24px",
          color: "#024d9c",
        }}
      >
        <Box
          sx={{
            width: "425px",
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "406px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/17641630-1@2x.png"
          />
          <Box
            sx={{
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            <Typography
              variant="inherit"
              sx={{ margin: 0 }}
            >{`Purpose of Product `}</Typography>
            <Typography variant="inherit" sx={{ margin: 0 }}>
              Certification
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "426px",
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "406px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick1}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/6432209-11@2x.png"
          />
          <Box
            sx={{
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Where to Apply
          </Box>
        </Box>
        <Box
          sx={{
            width: "426px",
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "407px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick2}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/11067850-11@2x.png"
          />
          <Box
            sx={{
              width: "333px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "284px",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                flexShrink: "0",
              }}
            >
              Eligibility Criteria
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "426px",
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "407px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick3}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/2967414-11@2x.png"
          />
          <Box
            sx={{
              width: "333px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "284px",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                flexShrink: "0",
              }}
            >
              Application Process
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "426px",
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "406px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick4}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/7391526-11@2x.png"
          />
          <Box
            sx={{
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Required Documents
          </Box>
        </Box>
        <Box
          sx={{
            width: "426px",
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "406px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick5}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/17323388-11@2x.png"
          />
          <Box
            sx={{
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Cost Breakdown
          </Box>
        </Box>
        <Box
          sx={{
            width: "426px",
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "407px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick6}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/14147713-11@2x.png"
          />
          <Box
            sx={{
              width: "333px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "284px",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                flexShrink: "0",
              }}
            >
              Timeline for Certification
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "426px",
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "407px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick7}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/5514748-1@2x.png"
          />
          <Box
            sx={{
              width: "333px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "284px",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                flexShrink: "0",
              }}
            >
              Validity of the Certificate
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredMembershipPrimaryCare;
