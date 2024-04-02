import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { useRequest } from 'ahooks';

import { getWebs, NotionSelect, type Website } from '@/api/webs';

function Webs() {
  const { data: webs } = useRequest(getWebs);

  const getUrls = (item: Website) => {
    return ['url', ...Object.keys(item).filter((key) => /^url_\d+$/.test(key))];
  };

  const openWebsite = (url: string) => {
    window.open(url, '_blank');
  };

  const handleCard = (item: Website) => {
    const urls = getUrls(item);
    if (urls.length > 1) return;
    openWebsite(item.url);
  };

  const renderFooterButtons = (item: Website) => {
    const urls = getUrls(item);
    if (urls.length < 2) return null;
    return (
      <>
        {urls.map((key) => (
          <Button
            key={key}
            variant="ghost"
            color="primary"
            size="sm"
            onClick={() => openWebsite(item[key as keyof Website] as string)}
          >
            {(item[`${key}_type` as keyof Website] as NotionSelect)?.name}
          </Button>
        ))}
      </>
    );
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {webs?.map((it) => (
        <Card
          key={it.id}
          className="w-60 cursor-pointer hover:-translate-y-2"
          isPressable
          onPress={() => handleCard(it)}
        >
          <CardHeader className="flex gap-5">
            <Image src={it.cover_url} radius="full" className="size-10 object-contain" />
            <div>{it.name}</div>
          </CardHeader>
          <CardBody>
            <div className="text-small">{it.description}</div>
          </CardBody>
          <CardFooter className="flex gap-3">
            <div className="flex-1"></div>
            {renderFooterButtons(it)}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Webs;
