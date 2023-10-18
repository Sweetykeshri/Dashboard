import { useEffect, useRef, useState } from "react";
import Card from "@aio/components/Card";
import Modal from "@aio/components/Modal";
import styles from "./Home.module.css";

import DoughnutChartExample from "../../components/DoughnutChartExample";
import HeaderSection from "@aio/components/HeaderSection";
import DataCard from "@aio/components/DataCard";
import { SlCalender } from "react-icons/sl";
import ActionButton from "@aio/components/ActionButton";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Section from "@aio/components/Section";

import BillingHistory from "../../components/BillingHistory";
import Paragraph from "../../components/Paragraph";
import BarChartExample from "../../components/BarChartExample";

export default function Dashboard() {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    //alert('closing');
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  }

  const handleSubmit = () => {
    alert('Submit is working..!');
    handleClose();
  }

  return (
    <>
      <HeaderSection
        heading={"Dashboard"}
        subHeading={"Welcome to aio dashboard"}
        rightItem={() => (
          <ActionButton
            onClick={() => setModal(true)}
            Icon={AiOutlinePlusCircle}
            label="Add New User"
          />
        )}
      />

      <Section>
        <DataCard
          label={"Earning"}
          value={"$198k"}
          percentageValue={37.8 }
          
          inverse={true}
        />
        <DataCard
          label={"Order"}
          value={"$2.4k"}
          percentageValue={-2}
        />
        <DataCard
          label={"Balance"}
          value={"$2.4k"}
          percentageValue={-2}
        />
        <DataCard
          label={"Total Sales"}
          value={"$89k"}
          percentageValue={11}
        />
      </Section>

      <Section>
        <Card
          heading="Overview"
          subHeading="Monthly Earning"
        >
          <BarChartExample />
        </Card>
        <Card
          heading="Customers"
          subHeading="Customers that buy products"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DoughnutChartExample />
          </div>
        </Card>
      </Section>

      {/* <Section>
        <Card
          heading="Basic Plan"
          subHeading="Our most popular plan for small teams."
          rightItem={() => {
            return <h2>$20 per month</h2>;
          }}
          footerLeft={() => {
            return (
              <div className={styles["date-placeholder"]}>
                <SlCalender />
                <p className="ml-5">5th Sep 2023</p>
              </div>
            );
          }}
          footerRight={() => {
            return (
              <ActionButton
                inverse={true}
                label="View"
                style={{ padding: "2px 5px", fontSize: 12 }}
              />
            );
          }}
        >
          <div style={{ margin: "10px" }}>
            <Paragraph />
            <Paragraph />
          </div>
        </Card>

        <Card heading="Payment method" subHeading="Change how you pay for plan">
          <div style={{ margin: "10px" }}>
            <Paragraph />
          </div>
        </Card>

        <Card
          heading="Basic Plan"
          subHeading="Our most popular plan for small teams."
          rightItem={() => {
            return <h2>$20 per month</h2>;
          }}
        >
          <div style={{ margin: "10px" }}>
            <Paragraph />
          </div>
        </Card>
      </Section> */}

      <BillingHistory />

      <Modal
        isOpen={modal}
        onClose={handleClose}
        heading={"AIO Dashboard"}
        positiveText={"Save Changes"}
        negativeText={"Cancel"}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      >
        <p>Welcome to aio dashboard</p>
      </Modal>
    </>
  );
}
