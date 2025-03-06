import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAffiliationNationalHealthServiceNHS: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    // Please sync "Care Library Required Affiliations" to the project
  }, []);

  const onImageClick = useCallback(() => {
    router.push(
      "/care-library-required-affiliation-national-health-service-n-h-s-purpose-of-product-certification"
    );
  }, [router]);

  const onImageClick1 = useCallback(() => {
    router.push(
      "/care-library-required-affiliation-national-health-service-n-h-s-where-to-apply"
    );
  }, [router]);

  const onImageClick2 = useCallback(() => {
    router.push(
      "/care-library-required-affiliation-national-health-service-n-h-s-eligibility-criteria"
    );
  }, [router]);

  const onImageClick3 = useCallback(() => {
    router.push(
      "/care-library-required-affiliation-national-health-service-n-h-s-application-process"
    );
  }, [router]);

  const onImageClick4 = useCallback(() => {
    router.push(
      "/care-library-required-affiliation-national-health-service-n-h-s-required-documents"
    );
  }, [router]);

  const onImageClick5 = useCallback(() => {
    router.push(
      "/care-library-required-affiliation-national-health-service-n-h-s-cost-breakdown"
    );
  }, [router]);

  const onImageClick6 = useCallback(() => {
    router.push(
      "/care-library-required-affiliation-national-health-service-n-h-s-timeline-for-certification"
    );
  }, [router]);

  const onImageClick7 = useCallback(() => {
    router.push(
      "/care-library-required-affiliation-national-health-service-n-h-s-validity-of-the-certificate"
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
          src="/CL-1/back-icon6.svg"
          onClick={onBackIconClick}
        />
        <Box sx={{ flex: 1, position: "relative", fontWeight: "600" }}>
          National Health Service (NHS)
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "195px",
          left: "66px",
          width: "1771px",
          height: "850px",
        }}
      >
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "427px",
            height: "405px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={427}
          height={405}
          alt=""
          src="/CL-1/image-29565@2x.png"
          onClick={onImageClick}
        />
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "446px",
            width: "427px",
            height: "405px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={427}
          height={405}
          alt=""
          src="/CL-1/image-295661@2x.png"
          onClick={onImageClick1}
        />
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "892px",
            width: "426px",
            height: "405px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={405}
          alt=""
          src="/CL-1/image-29594@2x.png"
          onClick={onImageClick2}
        />
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "1338px",
            width: "426px",
            height: "405px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={405}
          alt=""
          src="/CL-1/image-29595@2x.png"
          onClick={onImageClick3}
        />
        <Image
          style={{
            position: "absolute",
            top: "445px",
            left: "0px",
            width: "427px",
            height: "405px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={427}
          height={405}
          alt=""
          src="/CL-1/image-29574@2x.png"
          onClick={onImageClick4}
        />
        <Image
          style={{
            position: "absolute",
            top: "445px",
            left: "446px",
            width: "427px",
            height: "405px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={427}
          height={405}
          alt=""
          src="/CL-1/image-29575@2x.png"
          onClick={onImageClick5}
        />
        <Image
          style={{
            position: "absolute",
            top: "445px",
            left: "892px",
            width: "426px",
            height: "405px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={405}
          alt=""
          src="/CL-1/image-29598@2x.png"
          onClick={onImageClick6}
        />
        <Image
          style={{
            position: "absolute",
            top: "445px",
            left: "1338px",
            width: "426px",
            height: "405px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={405}
          alt=""
          src="/CL-1/image-29599@2x.png"
          onClick={onImageClick7}
        />
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredAffiliationNationalHealthServiceNHS;
