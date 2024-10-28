"use client";
import { Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import type { ThirdwebContract } from "thirdweb";
import * as CommonExt from "thirdweb/extensions/common";
import { SettingsMetadata } from "./components/metadata";
import { SettingsPlatformFees } from "./components/platform-fees";
import { SettingsPrimarySale } from "./components/primary-sale";
import { SettingsRoyalties } from "./components/royalties";

interface ContractSettingsPageProps {
  contract: ThirdwebContract;
  isContractMetadataSupported: boolean;
  isPrimarySaleSupported: boolean;
  isRoyaltiesSupported: boolean;
  isPlatformFeesSupported: boolean;
}

const ContractSettingsPageInner: React.FC<ContractSettingsPageProps> = ({
  contract,
  isContractMetadataSupported,
  isPrimarySaleSupported,
  isRoyaltiesSupported,
  isPlatformFeesSupported,
}) => {
  return (
    <Flex direction="column" gap={4}>
      <Flex gap={8} w="100%">
        <SimpleGrid columns={1} w="100%" gap={8}>
          {contract && (
            <GridItem order={isContractMetadataSupported ? 0 : 100}>
              <SettingsMetadata
                contract={contract}
                detectedState={
                  isContractMetadataSupported ? "enabled" : "disabled"
                }
              />
            </GridItem>
          )}
          {contract && (
            <GridItem order={isPrimarySaleSupported ? 2 : 101}>
              <SettingsPrimarySale
                contract={contract}
                detectedState={isPrimarySaleSupported ? "enabled" : "disabled"}
              />
            </GridItem>
          )}

          {contract && (
            <GridItem order={isRoyaltiesSupported ? 3 : 102}>
              <SettingsRoyalties
                contract={contract}
                detectedState={isRoyaltiesSupported ? "enabled" : "disabled"}
              />
            </GridItem>
          )}

          {contract && (
            <GridItem order={isPlatformFeesSupported ? 4 : 103}>
              <SettingsPlatformFees
                contract={contract}
                detectedState={isPlatformFeesSupported ? "enabled" : "disabled"}
              />
            </GridItem>
          )}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export function ContractSettingsPage(props: {
  contract: ThirdwebContract;
  functionSelectors: string[];
}) {
  const { functionSelectors, contract } = props;
  return (
    <ContractSettingsPageInner
      contract={contract}
      isContractMetadataSupported={[
        CommonExt.isGetContractMetadataSupported(functionSelectors),
        CommonExt.isSetContractMetadataSupported(functionSelectors),
      ].every(Boolean)}
      isPrimarySaleSupported={[
        CommonExt.isPrimarySaleRecipientSupported(functionSelectors),
        CommonExt.isSetPrimarySaleRecipientSupported(functionSelectors),
      ].every(Boolean)}
      isRoyaltiesSupported={[
        CommonExt.isGetDefaultRoyaltyInfoSupported(functionSelectors),
        CommonExt.isSetDefaultRoyaltyInfoSupported(functionSelectors),
      ].every(Boolean)}
      isPlatformFeesSupported={[
        CommonExt.isGetPlatformFeeInfoSupported(functionSelectors),
        CommonExt.isSetPlatformFeeInfoSupported(functionSelectors),
      ].every(Boolean)}
    />
  );
}
