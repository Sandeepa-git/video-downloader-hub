import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Download,
  Youtube,
  Music,
  Facebook,
  ExternalLink,
  Copy,
  Check,
  Linkedin,
  Instagram,
} from "lucide-react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [detectedPlatform, setDetectedPlatform] = useState(null);
  const [copied, setCopied] = useState(false);

  const detectPlatform = (inputUrl) => {
    if (inputUrl.includes("youtube.com") || inputUrl.includes("youtu.be")) {
      return "youtube";
    } else if (inputUrl.includes("tiktok.com")) {
      return "tiktok";
    } else if (
      inputUrl.includes("facebook.com") ||
      inputUrl.includes("fb.watch")
    ) {
      return "facebook";
    } else if (inputUrl.includes("linkedin.com")) {
      return "linkedin";
    } else if (inputUrl.includes("instagram.com")) {
      return "instagram";
    }
    return null;
  };

  const handleUrlChange = (e) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);
    setDetectedPlatform(detectPlatform(inputUrl));
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const downloaders = {
    youtube: [
      {
        name: "Y2mate",
        url: "https://v4.www-y2mate.com/",
        description:
          "Popular free YouTube downloader with high quality options",
        features: ["High Quality", "Fast Download", "Multiple Formats"],
      },
      {
        name: "YT1D",
        url: "https://yt1d.com/en307/",
        description: "Download YouTube videos in HD, 1080p, or 4K",
        features: ["4K Support", "MP3 Conversion", "HD Quality"],
      },
      {
        name: "SocialPlug",
        url: "https://www.socialplug.io/free-tools/youtube-video-downloader",
        description: "100% ad-free YouTube downloader",
        features: ["Ad-Free", "Multiple Resolutions", "Clean Interface"],
      },
    ],
    tiktok: [
      {
        name: "SSStiK",
        url: "https://ssstik.io/",
        description: "Fast TikTok video downloader",
        features: ["No Watermark", "HD Quality", "Fast Download"],
      },
      {
        name: "SaveTik",
        url: "https://savetik.co/en2",
        description: "Download TikTok videos without watermark",
        features: ["No Software Required", "Watermark Free", "Mobile Friendly"],
      },
    ],
    facebook: [
      {
        name: "FDown",
        url: "https://fdown.net/",
        description: "Download Facebook videos directly",
        features: ["Direct Download", "High Quality", "Easy to Use"],
      },
      {
        name: "FDownloader",
        url: "https://fdownloader.net/en",
        description: "Download Facebook videos in HD 1080p, 4K",
        features: ["4K Support", "HD Quality", "Fast Processing"],
      },
      {
        name: "Snapsave",
        url: "https://snapsave.app/",
        description: "Download Facebook videos in multiple qualities",
        features: ["Multiple Formats", "2K/4K Support", "Cross-Platform"],
      },
    ],
    linkedin: [
      {
        name: "Taplio",
        url: "https://taplio.com/linkedin-video-downloader",
        description: "Simple 3-step process to download LinkedIn videos",
        features: ["Easy to Use", "Fast Download", "No Registration"],
      },
      {
        name: "Publer",
        url: "https://publer.com/tools/linkedin-video-downloader",
        description: "Free online LinkedIn video downloader",
        features: ["No Ads", "No Watermarks", "High Quality"],
      },
      {
        name: "ContentStudio",
        url: "https://contentstudio.io/tools/free-linkedin-downloader",
        description: "Watermark-free, high-speed downloads",
        features: ["Watermark Free", "High Speed", "Professional"],
      },
    ],
    instagram: [
      {
        name: "SnapInsta",
        url: "https://snapinsta.to/en",
        description: "Download Instagram Photos, Videos, Reels, Stories",
        features: ["All Content Types", "Fast Download", "No Login Required"],
      },
      {
        name: "FastDl",
        url: "https://fastdl.app/en",
        description: "Download Instagram Videos, Reels, Photos, IGTV",
        features: ["Multiple Formats", "HD Quality", "Easy to Use"],
      },
      {
        name: "iGram",
        url: "https://igram.world/",
        description: "Fast online tool for Instagram content",
        features: ["4K Support", "No Watermark", "Free Download"],
      },
    ],
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "youtube":
        return <Youtube className="w-5 h-5 text-red-500" />;
      case "tiktok":
        return <Music className="w-5 h-5 text-black" />;
      case "facebook":
        return <Facebook className="w-5 h-5 text-blue-600" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5 text-blue-700" />;
      case "instagram":
        return <Instagram className="w-5 h-5 text-pink-500" />;
      default:
        return <Download className="w-5 h-5" />;
    }
  };

  const getPlatformName = (platform) => {
    switch (platform) {
      case "youtube":
        return "YouTube";
      case "tiktok":
        return "TikTok";
      case "facebook":
        return "Facebook";
      case "linkedin":
        return "LinkedIn";
      case "instagram":
        return "Instagram";
      default:
        return "Unknown";
    }
  };

  const openDownloader = (downloaderUrl) => {
    window.open(downloaderUrl, "_blank");
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <Helmet>
          <title>
            Video Downloader Hub - Download YouTube, TikTok, Facebook, LinkedIn
            & Instagram Videos
          </title>
          <meta
            name="description"
            content="Download videos and images easily from YouTube, TikTok, Facebook, LinkedIn, and Instagram using recommended free downloaders."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://your-domain.com/" />
          {/* Open Graph */}
          <meta property="og:title" content="Video Downloader Hub" />
          <meta
            property="og:description"
            content="Download videos and images from popular social platforms easily."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://your-domain.com/" />
          <meta
            property="og:image"
            content="https://your-domain.com/og-image.jpg"
          />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Video Downloader Hub" />
          <meta
            name="twitter:description"
            content="Download videos and images from popular social platforms easily."
          />
          <meta
            name="twitter:image"
            content="https://your-domain.com/twitter-image.jpg"
          />
        </Helmet>

        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-12 px-4 sm:px-0 flex flex-col items-center text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4">
              <Download className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Video Downloader Hub
              </h1>
            </div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Download videos and images from YouTube, TikTok, Facebook,
              LinkedIn, and Instagram easily. Just paste your link and choose
              from our recommended downloaders.
            </p>
          </div>

          {/* URL Input Section */}
          <Card className="max-w-2xl mx-auto mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Paste Your Video URL
              </CardTitle>
              <CardDescription>
                Enter a YouTube, TikTok, Facebook, LinkedIn, or Instagram video
                URL to get started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=... or https://www.instagram.com/..."
                  value={url}
                  onChange={handleUrlChange}
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard(url)}
                  disabled={!url}
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>

              {detectedPlatform && (
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  {getPlatformIcon(detectedPlatform)}
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">
                    {getPlatformName(detectedPlatform)} link detected!
                  </span>
                  <Badge variant="secondary" className="ml-auto">
                    {getPlatformName(detectedPlatform)}
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Downloaders Section */}
          {detectedPlatform && downloaders[detectedPlatform] && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                Recommended {getPlatformName(detectedPlatform)} Downloaders
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {downloaders[detectedPlatform].map((downloader, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {getPlatformIcon(detectedPlatform)}
                        {downloader.name}
                      </CardTitle>
                      <CardDescription>
                        {downloader.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {downloader.features.map((feature, featureIndex) => (
                          <Badge
                            key={featureIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        onClick={() => openDownloader(downloader.url)}
                        className="w-full"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open {downloader.name}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Platforms Section */}
          {!detectedPlatform && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                All Available Downloaders
              </h2>

              {Object.entries(downloaders).map(
                ([platform, platformDownloaders]) => (
                  <div key={platform} className="mb-12">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-200">
                      {getPlatformIcon(platform)}
                      {getPlatformName(platform)} Downloaders
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {platformDownloaders.map((downloader, index) => (
                        <Card
                          key={index}
                          className="hover:shadow-lg transition-shadow"
                        >
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              {getPlatformIcon(platform)}
                              {downloader.name}
                            </CardTitle>
                            <CardDescription>
                              {downloader.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex flex-wrap gap-1">
                              {downloader.features.map(
                                (feature, featureIndex) => (
                                  <Badge
                                    key={featureIndex}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {feature}
                                  </Badge>
                                )
                              )}
                            </div>
                            <Button
                              onClick={() => openDownloader(downloader.url)}
                              className="w-full"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Open {downloader.name}
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          {/* Instructions */}
          <Card className="max-w-4xl mx-auto mt-12">
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Copy the video URL from YouTube, TikTok, Facebook, LinkedIn,
                  or Instagram
                </li>
                <li>Paste the URL in the input field above</li>
                <li>
                  Choose from the recommended downloaders for your platform
                </li>
                <li>Click "Open" to visit the downloader website</li>
                <li>
                  Paste your URL on the downloader site and follow their
                  instructions
                </li>
              </ol>
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>Note:</strong> This website provides links to
                  third-party downloaders. Please respect copyright laws and
                  platform terms of service when downloading content.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
