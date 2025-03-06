import type { NextPage } from "next";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredMembershipHomeCare: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-2/care-library-required-memberships");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push(
      "/care-library-required-membership-home-care-purpose-of-product-certification"
    );
  }, [router]);

  const onFrameContainerClick1 = useCallback(() => {
    router.push(
      "/CL-2/care-library-required-membership-home-care-where-to-apply"
    );
  }, [router]);

  const onFrameContainerClick2 = useCallback(() => {
    router.push(
      "/care-library-required-membership-home-care-eligibility-criteria"
    );
  }, [router]);

  const onFrameContainerClick3 = useCallback(() => {
    router.push(
      "/care-library-required-membership-home-care-application-process"
    );
  }, [router]);

  const onFrameContainerClick4 = useCallback(() => {
    router.push(
      "/care-library-required-membership-home-care-required-documents"
    );
  }, [router]);

  const onFrameContainerClick5 = useCallback(() => {
    router.push(
      "/CL-2/care-library-required-membership-home-care-cost-breakdown"
    );
  }, [router]);

  const onFrameContainerClick6 = useCallback(() => {
    router.push(
      "/care-library-required-membership-home-care-timeline-for-certification"
    );
  }, [router]);

  const onFrameContainerClick7 = useCallback(() => {
    router.push("/CL-2/");
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
          Home Care
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
            width: "427px",
            position: "relative",
            borderRadius: "8px",
            backgroundColor: "#e1ecff",
            height: "401px",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick}
        >
          <Box
            sx={{
              position: "absolute",
              top: "260px",
              left: "50px",
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
          <Image
            style={{
              position: "absolute",
              top: "37px",
              left: "67px",
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/17641630-11@2x.png"
          />
        </Box>
        <Box
          sx={{
            width: "427px",
            position: "relative",
            borderRadius: "8px",
            backgroundColor: "#e1ecff",
            height: "401px",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick1}
        >
          <Box
            sx={{
              position: "absolute",
              top: "304px",
              left: "113.6px",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Where to Apply
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "69px",
              left: "113px",
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/6432209-11@2x.png"
          />
        </Box>
        <Box
          sx={{
            width: "427px",
            position: "relative",
            borderRadius: "8px",
            backgroundColor: "#e1ecff",
            height: "402px",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick2}
        >
          <Box
            sx={{
              position: "absolute",
              top: "294px",
              left: "47px",
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
          <Image
            style={{
              position: "absolute",
              top: "78px",
              left: "113.3px",
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/11067850-14@2x.png"
          />
        </Box>
        <Box
          sx={{
            width: "428px",
            position: "relative",
            borderRadius: "8px",
            backgroundColor: "#e1ecff",
            height: "402px",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick3}
        >
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "48px",
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
          <Image
            style={{
              position: "absolute",
              top: "76px",
              left: "125px",
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/2967414-11@2x.png"
          />
        </Box>
        <Box
          sx={{
            width: "427px",
            position: "relative",
            borderRadius: "8px",
            backgroundColor: "#e1ecff",
            height: "401px",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick4}
        >
          <Box
            sx={{
              position: "absolute",
              top: "303px",
              left: "92px",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Required Documents
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "69px",
              left: "113.3px",
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/7391526-14@2x.png"
          />
        </Box>
        <Box
          sx={{
            width: "428px",
            position: "relative",
            borderRadius: "8px",
            backgroundColor: "#e1ecff",
            height: "401px",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick5}
        >
          <Box
            sx={{
              position: "absolute",
              top: "304px",
              left: "113px",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Cost Breakdown
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "69px",
              left: "115.4px",
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/17323388-13@2x.png"
          />
        </Box>
        <Box
          sx={{
            width: "428px",
            position: "relative",
            borderRadius: "8px",
            backgroundColor: "#e1ecff",
            height: "402px",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick6}
        >
          <Box
            sx={{
              position: "absolute",
              top: "281px",
              left: "48px",
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
          <Image
            style={{
              position: "absolute",
              top: "63px",
              left: "113.3px",
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/14147713-13@2x.png"
          />
        </Box>
        <Box
          sx={{
            width: "427px",
            position: "relative",
            borderRadius: "8px",
            backgroundColor: "#e1ecff",
            height: "402px",
            cursor: "pointer",
          }}
          onClick={onFrameContainerClick7}
        >
          <Box
            sx={{
              position: "absolute",
              top: "287px",
              left: "47px",
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
          <Image
            style={{
              position: "absolute",
              top: "57px",
              left: "108px",
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/5514748-1@2x.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredMembershipHomeCare;
