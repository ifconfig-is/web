# ifconfig

## Intro

This is a project for providing IP lookup online service. Live demo: [https://ifconfig.is](https://ifconfig.is).

A fully worked service consists of 3 components:

1.  Backend API service ([geoip2-gql](https://github.com/i3h/geoip2-gql)):

    We use a GraphQL API to provide IP data. The data source is GeoLite2 from [MaxMind](https://www.maxmind.com).

2.  Frontend static resources ([ifconfig](https://github.com/i3h/ifconfig)):

    Static files: html, css, js.

3.  Dispatcher ([ifconfig-dispatcher](https://github.com/i3h/ifconfig-dispatcher)):

    The web service can be accessed from both browser and headless tool.
    We need send different responses based on user agent.

## Command Line Usage

```
$ curl ifconfig.is
1.2.3.4

$ curl ifconfig.is/json
{
  "Continent":  "Asia",
  "Country"  :  "Singapore",
  "Latitude" :  1.314000,
  "Longitude":  103.683900,
  "TimeZone" :  "Asia/Singapore",
  "IsEU"     :  false,
  "ASN"      :  14061,
  "ORG"      :  "DIGITALOCEAN-ASN"
}

$ curl ifconfig.is/json/www.google.com
{
  "Continent":  "North America",
  "Country"  :  "United States",
  "Latitude" :  37.751000,
  "Longitude":  -97.822000,
  "TimeZone" :  "America/Chicago",
  "IsEU"     :  false,
  "ASN"      :  15169,
  "ORG"      :  "GOOGLE"
}
```

## Self-hosted Service

We have pre-built docker images for you to run self-hosted service quickly.

Default running port is 3080. You can modify `docker-compose.yml` or use nginx to setup a reverse proxy.

```
# Run docker-compose to bring services up

wget https://raw.githubusercontent.com/i3h/ifconfig/master/docker-compose.yml

docker-compose up -d
```

## Data Source

The default path of MaxMind `.mmdb` files is set as `/var/www/maxmind`.
You need modify `docker-compose.yml` to set your own path.

To comply with GDPR and CCPA, MaxMind does not provide database on public page starting from 2019/12/30.
A license is required to download these files, but it is easy to get one by signing up a free MaxMind account.

## License

See the [LICENSE](https://github.com/i3h/ifconfig/blob/master/LICENSE.md) file for license rights and limitations (MIT).

# Acknowledgements

[mpolden/echoip](https://github.com/mpolden/echoip)

[oschwald/geoip2-golang](https://github.com/oschwald/geoip2-golang)

[MaxMind](https://www.maxmind.com)
