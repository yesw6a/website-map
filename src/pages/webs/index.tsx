import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { useRequest } from 'ahooks';

import { getWebs, type Website } from '@/api/webs';

function Webs() {
  const { data: webs } = useRequest(getWebs);

  const renderFooterButtons = (item: Website) => {
    // const buttons = Object.keys(item).filter(it => )
    return null;
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {webs?.map((it) => (
        <Card className="w-60 cursor-pointer hover:-translate-y-2">
          <CardHeader className="flex gap-5">
            <Image src={it.cover_url} radius="full" className="size-10 object-contain" />
            <div>{it.name}</div>
          </CardHeader>
          <CardBody>
            <div className="text-small">{it.description}</div>
          </CardBody>
          <CardFooter className="flex gap-3">
            <div className="flex-1"></div>
            {renderFooterButtons()}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Webs;
